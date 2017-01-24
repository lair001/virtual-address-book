class UsersController < JsonController

	def show
		@user = User.find(params[:id])
		authorize(@user)
		render json: @user
	end

	def create
		@user = User.new(user_params)
		if @user.save
			sign_in_user_and_render_user_json
		else
			render json: @user, status: 422, serializer: ModelErrorsSerializer
		end
	end

	def update
		@user = User.find(params[:id])
		current_user.authenticate(params[:user][:current_password].strip)
		authorize(@user)
		if @user.update(user_params)
			session[:security_code] = @user.security_code if @user == current_user
			render json: @user
		else
			render json: @user, status: 422, serializer: ModelErrorsSerializer
		end
	end

	def destroy
		@user = User.find(params[:id])
		current_user.authenticate(params[:current_password].strip)
		authorize(@user)
		@user.destroy
		render json: {}, serializer: ResourceDestroyedSerializer
	end

private

	def user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation)
	end

end