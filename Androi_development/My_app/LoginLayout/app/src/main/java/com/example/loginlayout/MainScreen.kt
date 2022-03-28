package com.example.loginlayout

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_screen)
        var admin = intent.getBooleanExtra("com.example.loginlayout.mainactivity_admin", false)
    }
}