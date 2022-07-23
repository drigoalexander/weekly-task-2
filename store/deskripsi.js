// import https from 'https'
export const state = () => ({
  isi: [
    {
      gambar: 'Screenshot_Praktikum-Git.jpg',
      isi: `
              1. Penggunaan Git untuk version control source code


              2. Menggunakan CLI Git untuk memasukan source code kedalam
              repository, dengan menggunakan Git init terlebih dahulu pada
              sebuah projek, kemudian Git add (file yang mau di add) atau bisa
              menggunakan tanda * untuk meng-add semua file, kemudian commit
              untuk memberikan sebuah komentar, menambahkan remote dengan cara
              git remote add origin "link" , kemudian git push -u origin (branch
              yang dituju)


              3. Menggunakan branch dalam git untuk dapat mempermudah proses
              kolaborasi dalam developing code, membuat 3 branch minimal saat
              mendevelop , branch main adalah core sebagai branch yang paling
              inti , branch development adalah branch yang dipakai ketika
              mendevelop source code, dan branch feature(feature 1 , feature 2 ,
              dst.) adalah branch yang dipakai untuk mengembangkan feature
              secara terpisah, ketika feature sudah fix dan benar baru akan di
              merge ke branch development, setlah branch development tidak ada
              perubahan kembali baru di merge ke branch main.`,
    },
    {
      gambar: 'UIUX.png',
      isi: `
              1. Design thinking , Empathize -> Define -> Ideate -> Prototype -> Validate
    
              2. At Designing the UX , first we need to define the user persona, after 
              that we make the stories based on our user persona then we check the performance 
              through usability testing step with survey. after that we move on to the define 
              process where we got the data from the empathize stage, we need to define what's 
              the most important for our user and our product after that we make the user flow 
              using wireflow that indicates the step from beginning until the end.
    
              3. For the UI, there's 4 pillar of UI , Consistency , Simple Interface , Good Typography 
              and Informative Feedback. This 4 pillar help us to design the best Interface that
              we can offer to the user`,
    },
    {
      gambar: 'figma.png',
      isi: `
              Tools figma sangat powerful karena dapat berjalan pada windows dan mac, dan juga dapat
              berkolaborasi dengan orang lain secara live, dengan menggunakan tools pada figma dapat
              mempermudah kita dalam pendesainan, seperti penggunaan grid untuk mengatur layout yang
              akan kita gunakan, penggunaan assets untuk reusable component, hingga penggunaan prototype
              agar dapat memberikan gambaran utuh untuk sebuah desain agar dapat didevelop sesuai keinginan`,
    },
    {
      gambar: 'html.png',
      isi: `
              HTML adalah HyperText Markup Language yang digunakan untuk membuat struktur dari 
              website yang akan digunakan, dengan menggunakan HTML dan tagsnya kita dapat membuat
              struktur yang akan digunakan misalnya seperti form sebagai struktur untuk pengisian
              form user , table untuk memberikan informasi berupa table kepada user , heading untuk
              memberikan kejelasan antara paragraph dan header, dan juga dengan elemen semantik HTML
              dapat memberikan informasi kepada web browser pengertian sesungguhnya.`,
    },
    {
      gambar: 'css.png',
      isi: `
              CSS adalah sebuah bahasa yang diciptakan untuk melakukan styling pada struktur HTML ,
              dengan menggunakan CSS kita bisa menambahkan warna, mengatur layout, mengatur font ,
              dan banyak hal lain. pada hari ini, saya belajar untuk menggunakan CSS secara internal,
              inline, dan external. pada dasarnya menggunakan css external adalah hal yang paling baik
              karena tidak tercampur dengan file HTMl nya, saya juga belajar untuk menggunakan CSS
              selector seperti contoh terdapat universal selector dengan menggunakan "*" , type selector
              dengan mengetikan nama "element" , class selector dengan menggunakan tanad "." pada awal
              nama classnya , id selector dengan menggunakan "#" pada awal selectornya. dan juga belajar
              beberapa layouting dengan menggunakan flex, grid dan masih banyak lagi. `,
    },
    {
      gambar: 'bootstrap.png',
      isi: `
              Bootstrap adalah framework CSS yang diciptakan untuk memudahkan kita dalam
              melakukan styling. dengan menggunakan Bootstrap kita diharapkan dapat mengerjakan
              slicing dengan lebih cepat karena sudah ada build in component yang memudahkan kita
              dalam membuat design responsive.`,
    },
    {
      gambar: 'jsrefresh.png',
      isi: `
              Pada javascript kali ini kami belajar membuat variable (let,var,const) dan mempelajari
              sifat-sifatnya seperti const yang tidak bisa diubah dan var yang bisa di redeclare.
              mempelajari destructuring dan method agar bisa memanipulasi dan menyalin array atau objek.
              belajar membuat function agar dapat menggunakan fungsi berulang-ulang kali. mempelajari
              sync dan asyn untuk mengeksekusi berdasarkan waktu proses atau urutan.`,
    },
    {
      gambar: 'cleancode.png',
      isi: `
              Dengan menuliskan kode yang clean (clean code) kita dapat meningkatkan proses development kita,
              dan juga dapat membantu programmer yang nantinya baru masuk lebih mudah mengerti kode yang
              dituliskan. dengan menerapkan metode KISS ( Keep It So Simple ) kita dapat menulis kode yang clean
              dengan cara

              Tidak Banyak menggunakan Argument
              Menggunakan Fungsi hanya untuk 1 tugas saja
              Membuat class atau fungsi yang tidak besar`,
    },
    {
      gambar: 'fefund.png',
      isi: `
              HTMl , CSS , JS adalah stack yang diperlukan untuk membuat web yang bagus. HTML sebagai rangka, CSS
              sebagai penghias , dan JS sebagai interaktif. Node.js adalah runtime environment javascript yang dapat
              menjalankan kode javascript dimanapun, sedangkan NPM sendiri adalah package manager untuk membantu kita
              menambahkan package atau depedensi kedalam environemtn proyek kita. dan terakhir git adalah version
              control yang membantu kita untuk mencatat perubahan pada file proyek kita.`,
    },
    {
      gambar: 'vuefund.png',
      isi: `
              Dengan menggunakan vue memudahkan dalam medevelop website dikarenakan sudah banyak fungsi yang disediakan
              oleh vue. beberapa contohnya saja seperti vue Directive untuk menjalankan perintah javascript atau ekspresi
              didalam attribut, ada juga vue data bind untuk mengikat DOM dan menggunakan sintaks pada HTML. ada juga
              Event handler , method , computed , watchers untuk menyimpan logika atau action untuk suatu attribute ataupun
              event yang sedang terjadi. ada juga component yang merupakan kustom element yang dapat dipanggil berkali2
              tanpa melakukan penulisan yang panjang.`,
    },
    {
      gambar: 'vuecli.png',
      isi: `
              Dengan menggunakan CLI dari Vue kita dapat membuat komponen file tunggak, menggunakan fitur router dan masih
              banyak lagi yang tidak kita dapatkan hanya dengan menggunakan CDN, membahas tentang komponen file tungga,
              komponen file tunggal adalah file yang memiliki struktur, style , dan fungsi yang dapat digunakan dalam 1 file,
               komponen ini berekstensi .vue. didalamnya terdapat 3 komponen yaitu : 1. sebagai struktur, <style> sebagai
               penghias , <script> sebagai fungsi. lanjut ke struktur folder, vue memiliki router sebagai yang mengatur route
               aplikasi, view sebagai direktori yang berhubungan dengan router, store sebagai direktori untuk menyimpan vuex
               , component untuk membuat componen dan berinteraksi dengan direktori view , dan test sebagai unit testing`,
    },
    {
      gambar: 'kompvue.png',
      isi: `
              Import dan Export akan sering digunakan ketika developing karena kita mengexport sebuah componen ataupun mengimport 
              component, utils, dsbnya. export terbagi menjadi 2 : 1. Export const ( ekspor 0 atau lebih per modul) 2. Default Exports 
              (1 / Module). import memiliki 4 tipe :
              1. import default untuk mengimport 1 module.
              2. Import multiple untuk mengimport lebih dari 1 module.
              3. Rename multiple untuk mengimport dan memberi alias pada module tersebut
              4. import default + multiple untuk mengimport target dan multiple import

              vue juga memberikan fasilitas untuk mengekspos data dari induk ke child baik itu data ataupun event dengan menggunakan props dan emits

              lifecycle memiliki hok yang memiliki fungsi masing-masing. siklus lifecycle pada vue berawal ari inisiasi dan berakhir ketika destroy.

              3 lifecycle utama dalam vue adalah :
              1. Created
              2. Mounted
              3. Destroyed`,
    },
    {
      gambar: 'vuehelpers.png',
      isi: `
              Dengan menggunakan routes kita dapat melakukan rendering pada single page apps, sehingga tidak perlu melakukan
              refresh pada page tersebut, routing pada vue menggunakan vue-route, vue dapat melakukan navigasi statis dan dinamis.
              pada vue ada juga template yang dapat kita gunakan sebagai susunan tata letak sehingga bisa kita panggil untuk memuat
              komponen. pada vue juga terdapat penyimpanan global yang merupakan vuex sehingga kita bisa memanggil data dari mana
              saja dan tanpa kehilangan data.`,
    },
    {
      gambar: 'vuedata.png',
      isi: `
              Dengan menggunakan axios kita dapat menkonsumsi dan mengkueri API, dengan menggunakan API yang kita dapat kita bisa
              memanggil berbagai macam data tanpa harus menyimpanya didalam local storage kita. kita juga belajar mengenai validasi
              data dimana kita bisa memvalidasi apakah data yang diinput sudah sesuai dengan data yang kita minta atau tidak`,
    },
    {
      gambar: 'vueqc.png',
      isi: `
               Melakukan Debuggin adalah salah satu hal yang harus dilakukan developer. dengan melakukan debugging kita dapat mengetahui
               kesalahan apa yang terjadi pada program atau kode yang kita tulis dan kita dapat menghilangkanya. alat untuk melakukan 
               debuggin bisa menggunakan devtools, console pada browser dan log. Sebagai developer kita juga harus melakukan unit testing
               agar memastikan program yang kita tulis berperilaku sesuai dengan apa yang kita harapkan, tools untuk melakukan unit testing 
               ada jest, dengan jest kita bisa melakukan test terhadap utils yang kita tulis. mengukur metriks kinerja dari aplikasi yang
               kita buat, dengan begitu ita bisa meningkatkan performance dari aplikasi yang kita buat, salah satu perkakas atau tools yang
               bisa kita pakai untuk mengukur metriks kinerja adalah lighthouse.`,
    },
    {
      gambar: 'vueui.png',
      isi: `
              UI Framework adalah kumpulan elemen visual yang bisa dipakai secara instan pada website, UI Framework ada sangat banyak ,
              terutama untuk Vue seperti vuesax, bootstrapVue, buefy, ant-design-vue , vuetify, tailwindvue, dll. pada modul ini kita
              mempelajari mengenai Vuetify, Vuetify dipilih karena paling banyak dipakai dan emiliki komponen yang lebih lengkap dan
              dokumentasi yang lebih lengkap. dengan mendaftarkan vuetify pada depedensi dan entry javascript kita bisa menggunakanya
              langsung. pada vuetify kita bisa melakukan banyak hal seperti manajemen tema warna atau biasa lebih familiar disebut dengan
              light-mode/ dark-mode, dengan mendaftarkan pada theme vuetify dan memberikan keterangan untuk warna gelap dan terang apa saja
              yang akan dirender, kita dapat menggunakan dark-mode ataupun light-mode dengan mudah pada vuetify. reaktivitas viewport adalah
              perubahan layout berdasarkan ukuran layar. pada vuetify terdapat breakpoint yang sudah disediakan mulai dari xs untuk < 600px
              hingga xl untuk >1904px. penggunaan reaktivitas viewport pada vuetify hanya dengan menambahkan syntax xs,sm,md,lg pada
              v-component yang telah disediakan. ex : <v-flex xs12 sm6>`,
    },
    {
      gambar: 'worktogether.png',
      isi: `
              Tim Produk Bertugas untuk mendesain dan mengawasi pengembangan produk baru, Tim produk biasanya terdiri dari PM sebagai 
              product management untuk menyusun strategi dalam pengembangan, dan UI/UX untuk mendesain tampilan dan experience dari pengguna.

              Tim Backend bertugas untuk mengembangkan server, membuat API endpoint dan Dokumentasi agar dapat dikonsumsi dan 
              digunakan oleh Fron-end Developer.

              Tim Devops bertugas untuk mempersingkat siklus hidup pengembangan sistem untuk deployment`,
    },
    {
      gambar: 'vuenuxt.png',
      isi: `
              Nuxt adalah Framework yang dibangun diatas Vue sehingga proses development menjadi lebih mudah, seperti contoh kita tidak
              perlu melakukan routing karena routing sudah otomatis dilakukan oleh Nuxt itu sendiri, dan banyak plugin yang sudah
              disediakan secara default oleh Nuxt. Nuxt adalah jawaban atas permasalahan yang terjadi pada Vue atau Single Page App,
              yaitu karena hanya 1 entry point sehingga sebanyak apapun informasi yang dikirimkan dari template vue ke index.html, mesin
              pencari google tetap tidak mendapatkan banyak informasi sehingga SEO kurang optimal, disinilah peran SSR untuk memperbaiki
              performance yang lebih baik dari Vue. kita juga dapat menerapkan Progressive Web Apps pada Nuxt untuk menjangkau siapa saja
              dengan perangkat apa saja.`,
    },
    {
      gambar: 'algo.png',
      isi: `
              Algoritma adalah prosedur komputasi yang memiliki input proses dan output, karakteristik algoritma adalah memiliki akhir
              (output) , terdifinisi secara baik dan efisien. algoritma dasar ada sequential, branching dan looping. tetapi masih banyak
              lagi seperti rekursi dsbnya. Pseudocode adalah deskripsi bahasa sederhana dari algoritma itu sendiri. sedangkan flowchart
              merupakan penggambaran urutan dan proses yang menggunakan simbol agar lebih mendetail.`,
    },
    {
      gambar: 'databse.png',
      isi: `
              Relation dalam database ada one to one , one to many , many to many. one to one berarti setiap 1 property hanya bisa memiliki 
              1 property lain (1 orang hanya bisa memiliki 1 id ) , one to many berarti 1 property bisa memiliki banyak property (1 petinggi 
              memiliki banyak bawahan, tapi banyak bawahan hanya memiliki 1 petinggi ) , many to many (banyak orang bisa memiliki banyak
              handphone, dan banyak handphone bisa dimiliki banyak orang ). type data dalam database ada string, date, varchar , integer. 
              dan dalam database ( DBMS ) ada statement
                1. Insert : untuk memasukan (insert/create) data kedalam table
                2. Select : untuk mengambil data dari dalam table
                3. update : untuk memperbarui data yang sudah ada dalam table
                4. Delete : untuk menghapus data dari dalam table
              `,
    },
    {
      gambar: 'query.png',
      isi: `
              Using Apollo we integrated our vue app with Graphql , to query we can use the apolloquery tag
              <ApolloQuery> then add the :query="gql => gql\`(query syntax)\`" to get the data . then we can use the parameters to query. for example
              query MyQuery($id: Int!) {
                  messages(where: { id: { _eq: $id } }) {
                   Todo
        }
      }`,
    },
    {
      gambar: 'mut.png',
      isi: `
              Menggunakan mutation pada graphql memungkinkan kita untuk melakukan CUD atau Create Update Delete pada database dengan input yang kita 
              masukan pada web dan kita kirimkan ke endpoint graphql kita. dengan menggunakan bantuan IDE pada hasura, kita bisa melakukan testing pada 
              syntax mutation kita untuk memanggilnya pada aplikasi kita.

              untuk dapat menggunakan mutation pada nuxt kita harus mengimport dulu gql from 'graphql-tag' , kemudian kita buat methods yang akan mem-mutate dengan cara

                      this.$apollo.mutate({
                          mutation: gql\`syntax mutation kita\`
                      })
                    
              dengan begitu kita bisa melakukan insert, update dan juga delete pada database kita melalui aplikasi.`,
    },
    {
      gambar: 'subs.png',
      isi: `
              Dengan melakukan Apollo Subscription kita dapat berinsteraksi secara langsung dengan perubahan data (realtime)
              tanpa harus melakukan refresh atau pemanggilan API kembali`,
    },

    {
      gambar: 'minipro.png',
      isi: `
              Pada Mini Project saya membaut sebuah web untuk streaming film yang bernama Nuxtflix.
              Aplikasi streaming film yang beredar di masyarakat pada saat ini sudah banyak , 
              tetapi sedikit aplikasi tersebut yang menawarkan kemudahan 
              dari segi harga sehingga tidak semua orang dapat menikmatinya.

              Pada Nuxtflix, aku berharap dapat menyajikan streaming film secara gratis sehingga 
              dapat dinikmati tanpa membayar
`,
    },
    {
      gambar: 'capstone.png',
      isi: `
              C-Loyal merupakan aplikasi yang memberikan kemudahan untuk Anda bertransaksi dengan
              penawaran-penawaran yang kami berikan. Selain itu dengan melakukan transaksi pada
              C-Loyal Anda juga berhak mendapatkan reward berupa poin yang telah kami kalkulasikan
              sesuai dengan transaksi yang Anda lakukan sebelumnya, bahkan poin yang Anda kumpulkan
              dapat pula dimanfaatkan untuk membeli penawaran menarik lainnya dengan fitur tukar poin. `,
    },
  ],
})

export const getter = {}

export const mutations = {}

export const actions = {}
