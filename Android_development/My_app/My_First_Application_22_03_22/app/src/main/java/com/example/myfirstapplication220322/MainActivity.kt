package com.example.myfirstapplication220322

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    lateinit var te: TextView
    lateinit var button: Button
    var counter: Int = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        te = findViewById((R.id.helloworld))
        button = findViewById(R.id.button)
        var t: String = "LEsson"
        te.setOnClickListener{view -> te.text = t}
        button.setOnClickListener{view -> te.text = resources.getString(R.string.hello_centria)}
        te.setBackgroundColor(getColor(R.color.test))
    }
}