package com.example.android_homework_2

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity

class Dogs: AppCompatActivity() {
    lateinit var dogs_list: ListView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dogs)
        dogs_list = findViewById(R.id.dogs_list)
        var dog_breeds = arrayOf("Affenpinscher", "Boerboel", "Can de Chira", "Havanese", "Kai Ken")
        var adapter: ArrayAdapter<*>
        adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, dog_breeds)
        dogs_list.adapter = adapter
    }
}