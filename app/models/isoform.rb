class Isoform < ActiveRecord::Base
  self.primary_key = "isoform_id"
  belongs_to :gene
end
