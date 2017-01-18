class SessionsController < JsonController

	def create
		@user = User.find_by(username: params[:username].strip)
		if @user && !@user.banned? && @user.authenticate(params[:password].strip)
			sign_in_user_and_render_user_json
		else
			render json: {}, status: 403, serializer: InvalidCredentialsSerializer
		end
	end

	def destroy
		reset_session
	end

end
