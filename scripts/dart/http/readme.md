## HTTP

Package ini berisi library yang mendukung HTTP requests untuk proyek 
yang menggunakan bahasa dart.

## Cara Pakai

Cara termudah untuk menggunakan library ini adalah dengan top level function. 
Kamu dapat membuat  individual HTTP request dengan minimal effort:

```dart
import 'package:http/http.dart' as http;

var url = 'https://example.com/whatsit/create';
var response = await http.post(url, body: {'name': 'doodle', 'color': 'blue'});
print('Response status: ${response.statusCode}');
print('Response body: ${response.body}');
```

If you're making multiple requests to the same server, you can keep open a
persistent connection by using a [Client][] rather than making one-off requests.
If you do this, make sure to close the client when you're done:
Jika kamu membuat multiple http request ke server yang sama, kamu dapat tetap membuka koneksi persisten dengan menggunakan object [Client] [] daripada membuat permintaan satu kali.
Jika kamu melakukan ini, pastikan untuk menutup koneksi ke client ketika kamu selesai melakukan request:

```dart
var client = http.Client();
try {
  var uriResponse = await client.post('https://example.com/whatsit/create',
      body: {'name': 'doodle', 'color': 'blue'});
  print(await client.get(uriResponse.bodyFields['uri']));
} finally {
  client.close();
}
```

