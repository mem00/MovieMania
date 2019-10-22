class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster_path
      t.string :backdrop_path
      t.text :overview
      t.date :release_date
      t.integer :rating

      t.timestamps
    end
  end
end
