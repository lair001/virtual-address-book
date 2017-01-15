class UsersController < JsonController

	def create
		@user = User.new(user_params)
		if @user.save
			reset_session
			session[:user_id] = @user.id
			session[:security_code] = @user.security_code
			render json: @user
		else
			render json: @user, status: 422, serializer: ActiveModel::Serializer::ErrorSerializer
		end
	end

private

	def user_params

		def user_params
			params.require(:user).permit(:username, :email, :password, :password_confirmation)
		end

	end

end