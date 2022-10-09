package com.example.androidprgrammingproject

import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.squareup.picasso.Picasso

class MyAdapter(val homeFeed: HomeFeed): RecyclerView.Adapter<CustomViewHolder>() {

    override fun getItemCount(): Int{
        return homeFeed.data.count()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CustomViewHolder {
        val layoutInflater = LayoutInflater.from(parent?.context)
        val cellForRow = layoutInflater.inflate(R.layout.items_view, parent, false)
        return CustomViewHolder(cellForRow)
    }

    override fun onBindViewHolder(holder: CustomViewHolder, position: Int) {
        /*val photo = homeFeed.photos.get(position)

        holder.text_1_2.text = photo.title

        val image = holder.imageView
        Picasso.get().load(photo.url).into(image)

        val icon = holder.icon
        Picasso.get().load("https://kindcompany.fi/wp-content/uploads/2022/03/Kind_refe_centria_Kuva_2_2000x2000px-800x864.jpg").into(icon)*/

        val footballLeage = homeFeed.data.get(position)

        holder.text_1_2.text = footballLeage.name

        val image = holder.imageView
        Picasso.get().load(footballLeage.logos.light).into(image)

        val icon = holder.icon
        Picasso.get().load("https://kindcompany.fi/wp-content/uploads/2022/03/Kind_refe_centria_Kuva_2_2000x2000px-800x864.jpg").into(icon)
    }
}

class CustomViewHolder(val view: View): RecyclerView.ViewHolder(view){
    lateinit var text_1_2: TextView
    lateinit var imageView: ImageView
    lateinit var icon: ImageView

    init {
        // Define click listener for the ViewHolder's View.
        text_1_2 = view.findViewById(R.id.text_1_2)
        imageView = view.findViewById((R.id.imageView))
        icon = view.findViewById(R.id.icon)

        view.setOnClickListener {
            val intent = Intent(view.context, SubActivity::class.java)
            view.context.startActivity(intent)
        }
    }
}