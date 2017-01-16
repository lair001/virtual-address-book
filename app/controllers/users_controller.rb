class UsersController < JsonController

	def create
		@user = User.new(user_params)
		if @user.save
			sign_in_user_and_render_user_json
		else
			render json: @user, status: 422, serializer: ActiveModel::Serializer::ErrorSerializer
		end
	end

	def update
		@user = User.find(params[:id])
		authorize(@user)
		if @user.update(user_params)
			session[:security_code] = @user.security_code if @user == current_user
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