module ConcernsHelper
	module Pundit

		def authorize_access_to_app
			if !['visitor', 'sessions'].include?(controller_name)
				authorize :access, :app?
			end
		end

	end
end