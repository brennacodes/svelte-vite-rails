class User < ApplicationRecord
  before_create { self.uuid = SecureRandom.uuid }

  alias_attribute :id, :uuid

  has_secure_password

  validates_presence_of :email
  validates_presence_of :password_digest
  validates_uniqueness_of :email
  validates_uniqueness_of :uuid, case_sensitive: true

  has_many :user_tutorials
  has_many :tutorial_steps, through: :user_tutorials
  has_and_belongs_to_many :user_tutorial_actions

  enum role: {
    default: 0,
    admin: 1,
    superadmin: 2,
    guest: 3,
    banned: 4,
    architect: 5
  }
end
