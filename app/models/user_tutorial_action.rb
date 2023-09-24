class UserTutorialAction < ApplicationRecord
  belongs_to :user
  belongs_to :user_tutorial
end
