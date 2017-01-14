include FactoryGirl::Syntax::Methods

module FactoryContext
  extend RSpec::SharedContext



end

RSpec.configure do |config|
  config.include FactoryContext
end