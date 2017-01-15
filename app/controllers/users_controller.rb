class UsersController < JsonController

	def create
		@user = User.new(user_params)
		if @user.save
			sign_in_user_and_render_user_json
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