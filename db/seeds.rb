# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


include FactoryGirl::Syntax::Methods
require_all 'spec/spec_helper/config/faker'

users = []

users << create(:user, :administrator, username: 'lair001', email: 'lair001@gmail.com')
users << create(:user, username: 'lair002', email: 'lair002@gmail.com')
users << create(:user, :banned, username: 'lair003', email: 'lair003@gmail.com')

users.each do |user|

	80.times do
		build(:contact, user: user)
	end

end