package com.example.android_homework_1_task3

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout

class MainActivity : AppCompatActivity() {
    lateinit var button1: Button
    lateinit var counter: TextView
    lateinit var constraint_layout: ConstraintLayout
    var x: Int = 19
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        button1 = findViewById(R.id.button1)
        counter = findViewById(R.id.counter)
        constraint_layout = findViewById(R.id.constraint_layout)

        button1.setOnClickListener{view -> decrement(x--)}
    }

    fun decrement(x: Int){
        if(x <= 0){
            counter.setText("0")
            constraint_layout.setBackgroundColor(Color.RED)
        } else {
            counter.setText("$x")
        }
    }
}