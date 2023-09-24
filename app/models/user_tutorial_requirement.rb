class UserTutorialRequirement < ApplicationRecord
  belongs_to :user
  belongs_to :user_tutorial
end
