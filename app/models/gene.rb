class Gene < ActiveRecord::Base
  self.primary_key = "gene_id"
  has_many :isoforms
end
