package com.example.android_homework_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    lateinit var change_button: Button
    lateinit var text_to_change: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        change_button = findViewById(R.id.change_button)
        text_to_change = findViewById(R.id.text_to_change)
        change_button.setOnClickListener{view -> changeText()}

    }

    fun changeText(){
        text_to_change.setText("Hello from Sang Nguyen!!!")
    }
}