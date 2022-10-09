package com.example.android_homework_2

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity

class Cats: AppCompatActivity() {
    lateinit var cats_list: ListView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cats)
        cats_list = findViewById(R.id.cats_list)
        var cat_breeds = arrayOf("Aegean", "Abyssinian", "American Bobtail", "American Curl", "American Ringtail")
        var adapter: ArrayAdapter<*>
        adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, cat_breeds)
        cats_list.adapter = adapter
    }
}