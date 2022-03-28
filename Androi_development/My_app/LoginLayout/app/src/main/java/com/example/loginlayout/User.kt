package com.example.loginlayout

class User {
    var username: String=""
    var password: String=""
    var admin: Boolean = false

    constructor(username: String, password: String, admin: Boolean) {
        this.username = username
        this.password = password
        this.admin = admin
    }
}