package com.example.loginlayout

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText


class MainActivity : AppCompatActivity() {
    lateinit var username_edit: EditText
    lateinit var password_edit: EditText
    lateinit var login_button: EditText
    lateinit var user1: User
    val EXTRA_MESSAGE: String = "com.example.loginlayout.mainactivity"
    //val EXTRA_MESSAGE: String = "fi.centria.tki.loginlayout.mainactivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        user1 = User("Risto", "password", true)
        username_edit = findViewById(R.id.mainactivity_username_edit)
        password_edit = findViewById(R.id.mainactivity_password_edit)
        login_button = findViewById(R.id.login_button)

        login_button.setOnClickListener{view -> login_pressed()}
    }

    fun login_pressed(){
        var username = username_edit.text.toString()
        var password = password_edit.text.toString()
        if(username == user1.username && password == user1.password){
            val intent = Intent(this,MainScreen::class.java).apply {
                putExtra(EXTRA_MESSAGE + "_admin",user1.admin)
            }
            startActivity(intent)
        }
    }
}