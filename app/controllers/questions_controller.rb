class QuestionsController < ApplicationController
  def index
    @challenge = Challenge.find(params[:challenge_id])
    @questions = @challenge.questions

    @game = true
  end
end
