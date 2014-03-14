class ResultsController < ApplicationController
  def default

  end

  def index
    defaultSearchStr = "Enter gene name or just go..."
    if params['home-search-string']==defaultSearchStr
      sigGenesData = GeneExpDiffData.where("q_value < :qval", {qval: 0.01}).order(:q_value).reverse_order().limit(10)
    end

  end
end
