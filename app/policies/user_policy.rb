class UserPolicy < ApplicationPolicy

	def show?
		update?
	end

	def update?
		user.administrator? || user == record
	end

end