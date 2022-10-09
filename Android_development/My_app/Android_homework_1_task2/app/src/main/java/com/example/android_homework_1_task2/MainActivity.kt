package com.example.android_homework_1_task2

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    lateinit var first_button: Button
    lateinit var second_button: Button
    lateinit var third_button: Button
    lateinit var fourth_button: Button
    var x: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        first_button = findViewById(R.id.first_button)
        second_button = findViewById(R.id.second_button)
        third_button = findViewById(R.id.third_button)
        fourth_button = findViewById(R.id.fourth_button)

        first_button.setOnClickListener{view -> changeColor(1)}
        second_button.setOnClickListener{view -> changeColor(2)}
        third_button.setOnClickListener{view -> changeColor(3)}
        fourth_button.setOnClickListener{view -> changeColor(4)}
    }

    fun changeColor(x: Int){
        if(x == 1){
            first_button.setBackgroundColor(Color.BLUE)
            second_button.setBackgroundColor(Color.CYAN)
            third_button.setBackgroundColor(Color.CYAN)
            fourth_button.setBackgroundColor(Color.CYAN)

        } else if(x == 2){
            first_button.setBackgroundColor(Color.CYAN)
            second_button.setBackgroundColor(Color.BLUE)
            third_button.setBackgroundColor(Color.CYAN)
            fourth_button.setBackgroundColor(Color.CYAN)
        } else if(x == 3){
            first_button.setBackgroundColor(Color.CYAN)
            second_button.setBackgroundColor(Color.CYAN)
            third_button.setBackgroundColor(Color.BLUE)
            fourth_button.setBackgroundColor(Color.CYAN)
        } else {
            first_button.setBackgroundColor(Color.CYAN)
            third_button.setBackgroundColor(Color.CYAN)
            second_button.setBackgroundColor(Color.CYAN)
            fourth_button.setBackgroundColor(Color.BLUE)
        }

    }
}