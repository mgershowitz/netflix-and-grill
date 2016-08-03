class CreateBbqueques < ActiveRecord::Migration[5.0]
  def change
    create_table :bbqueques do |t|
      t.string :title
      t.string :image
      t.string :meat

      t.timestamps
    end
  end
end
