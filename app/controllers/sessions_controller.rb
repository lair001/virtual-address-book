class SessionsController < JsonController

	def create
		@user = User.find_by(username: params[:username].strip)
		if @user && !@user.banned? && @user.authenticate(params[:password].strip)
			reset_session
			session[:user_id] = @user.id
			session[:security_code] = @user.security_code
			render json: @user
		else
			render json: @user, status: 403, serializer: InvalidCredentialsSerializer
		end
	end

	def destroy
		reset_session
	end

end
