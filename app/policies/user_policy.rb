class UserPolicy < ApplicationPolicy

	def show?
		update?
	end

	def update?
		user.superuser? || user.administrator? || user == record
	end

end