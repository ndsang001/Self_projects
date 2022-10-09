package com.example.android_homework_2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    lateinit var button_cats: Button
    lateinit var button_dogs: Button
    //val EXTRA_MESSAGE: String = "com.example.android_homework_2.mainactivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        button_cats = findViewById(R.id.button_cats)
        button_dogs = findViewById(R.id.button_dogs)
        button_cats.setOnClickListener { view -> login_pressed("cats") }
        button_dogs.setOnClickListener { view -> login_pressed("dogs") }
    }

    fun login_pressed(animal: String){
        if(animal == "cats"){
            val intent = Intent(this, Cats::class.java)
            startActivity(intent)
        } else{
            val intent = Intent(this, Dogs::class.java)
            startActivity(intent)
        }
    }
}