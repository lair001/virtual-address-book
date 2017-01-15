class UserPolicy < ApplicationPolicy

	def update?
		user.superuser? || user.administrator? || user == record
	end

end