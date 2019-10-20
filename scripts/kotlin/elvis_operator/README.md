**Elvis Operator**

Elvis operator atau **?:** membantu kita dalam memberikan nilai _default_ dari suatu object jika bernilai **null**.

Contohnya :

    val name : String? = null
    println(name ?: "Ifan Zalukhu")  // Ifan Zalukhu

Potongan kode di atas sebenarnya hampir sama dengan :

     if (name != null) println(name) else println("Ifan Zalukhu")

Singkatnya, elvis operator mengembalikan nilai sebelah kiri dari **?:** jika object tidak bernilai _null_ begitu juga sebaliknya, mengembalikan nilai sebelah kanan jika object bernilai _null_.

Sekilas kalau diperhatikan, elvis operator tidak beda jauh dengan **ternary operator** atau **? :** pada bahasa programming lainnya.

### Referensi

[What does ?: do in Kotlin? (Elvis Operator)](https://stackoverflow.com/questions/48253107/what-does-do-in-kotlin-elvis-operator)
