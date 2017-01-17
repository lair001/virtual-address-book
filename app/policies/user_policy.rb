class UserPolicy < ApplicationPolicy

	def show?
		update?
	end

	def update?
		user.administrator? || user == record
	end

	def destroy?
		user == record
	end

end