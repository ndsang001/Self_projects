package com.example.loginlayout

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {
    lateinit var username_edit: EditText
    lateinit var password_edit: EditText
    lateinit var login_button: Button
    lateinit var user1: User
    val EXTRA_MESSAGE: String = "com.example.loginlayout.mainactivity"
    lateinit var sharePreferences: SharedPreferences


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        user1 = User("Risto", "password", true)
        username_edit = findViewById(R.id.mainactivity_username_edit)
        password_edit = findViewById(R.id.mainactivity_password_edit)
        login_button = findViewById(R.id.login_button)
        sharePreferences = this.getSharedPreferences(getString(R.string.preferences_filename), Context.MODE_PRIVATE)
        login_button.setOnClickListener { view -> login_pressed() }

    }

    fun login_pressed(){
        var username = username_edit.text.toString()
        var password = password_edit.text.toString()
        if (username == user1.username && password == user1.password){
            val intent = Intent(this,MainScreen::class.java).apply {
                putExtra(EXTRA_MESSAGE + "_admin",user1.admin)
            }
            sharePreferences = this.getPreferences(Context.MODE_PRIVATE) ?: return
            with (sharePreferences.edit()){
                putBoolean(getString(R.string.user_admin),user1.admin)
                putString(getString(R.string.user_username),username)

                apply()
            }
            startActivity(intent)
        }
        else{
            var toast_text ="Wrong username or password"
            var toast = Toast.makeText(this, toast_text, Toast.LENGTH_LONG)
            toast.show()
        }

    }
}