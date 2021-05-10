import React from "react";

export default function UpcomingEvent() {
  return (
    <div
      style={{
        border: "1px dotted #DDDDDD",
        display: "flex",
        boxSizing: "border-box",
        margin: "10px",
        // borderRadius: "px",
        // padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <img
            style={{
              // borderRadius: "500px",
              border: "0.5px solid black",
              width: "80px",
              height: "80px",
              margin: "15px",
            }}
            src={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBwaHBoaHCEaHBoaHhoaGhoZGhoeIS4lHB4rHxgaJjgnKzAxNTU1HCY7QDs0Py40NTEBDAwMEA8QGhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALMBGgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAIBAgQDBQUGAwYGAwAAAAECEQAhAxIxQQRRYQUicYGREzKhsfAGQlKSwdEU4fEjU2KCotIVQ3KT0+IzssL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgICAwEAAAAAAAAAAQIRITEDEkFRE2EEIrGh/9oADAMBAAIRAxEAPwDpslMcM0cCpAV1256UXVqGZrTC0ig5U2rNWatKKsDDHKp5BSVLNq0U1WfZ0vZ1fZnQEUoo3s6f2dX2NAxTZasZKTpbSnseqvSBpTTBaza1MYMGob1EGkXpFsEwavI9qzQ/WjLjVnLkx6WcQ1QxEvNGfEmo5CauNsMpLAoqS05wjTqlddxy1Sy1Z4bDoIrC7U+1fsXbDVAWUxJNtoEDe81x8mcxnLrhja6PFwjM1TxeNRHCOwViCRNha8ZjaYv5VyL/AGr4hswJQA2hVgjWQDMg2N/OsjiXJl2bMTCkkkkiwJOvM2gj51wv8mdSOv4fl0nbLcM6HEjOWLZVQZCWAg5gSA2u/PpXNNhIQVCKLGBJupHdBIgmBy1vWZj9onNAUAkQRcL07vp6U3C8SwuSAQVPIMJ3NcfJnlly6Y4zFZw8RlPdyldCBJP5YsBbwNX8LigjZgYMyA1hcHQC8amaz37SRr5SDtAAjkREWE8xrFDxspYZzEWlfvKRZj0toefnXPntrhbdkfvQMykGyjUAb+ltL6U+NgouER3wzEmRcWkgFbgnNA7oW0DrVfhcsWYzEkmLi8gc7AetS4jiSpQAFgWudlHIEaAfIVrHPKX7TLGVVyoqhpbDbvZ1JIXUnDUNEiQL9Y5wK/E4DBnWQSIbMpJXLAli0e7LCOdabPGcZCZMCe8WAF/hyoXEYKMuZlIJXUwATFh5etutb/Lua0x66V1BYkM7BcgYgXvEhTMdDabneje0AsExIGll02rPXEAETEm+oINjJ3qz7Y81/IK3M2fV7EBTimWk/SvU5Jinqvhq08qsgUDRSp4p4oGpU8U4FBGafNVkcLbWgOkGCKm4mqiGqYNRy0+WqHgUB8Ezaj5akBQZ74bcqEcFjtWrUHaqbZy8K1FThWrQwRzvSxLG1Taq68P1oiLaKeaQNVEnW1UjOlXZqvxuMURnVC7ASEXVjyFBznbH2lXAfIqZ2Hv97KFNoXQyb6Vzf/End3JCf2jGAVURI7svsygL3omeYqz2j2TigtjYq5c7gkxYFjAWAQdTqTNhB3rIbg8pjuiWhohoMZveBiQNtZO+/nz99u2OtCcYiq8KViABA1IABkyQTpvvptUUxEOjaXKkiLdeVqqLhlpBZSAMthrcmQLQY68qbFwlCkANmbSYItqCdtLX2ry5SXJ1l4UuLxVZzeBJAIva0dI1qu3FNETItJsfPxq6nZz3OdAZ30+Wl5FWuC7LdScyK2awBIJJ2jedOW9W5YyM6rPwFk9JPjFwQJsdY1rXxOx1YiHJBAIAMRO2kx5VeeAkwIAEqFETfReWvntUFx1+6TtbQrv8/qDXLLO3pZGX/wAHNyoJUGCG20gZhqdrCfhU8LgWKWstwQblTFucEb6aemjwuPmQ2MreYgGTcnmb6nXpQvbQSAqzNzEiwkTHjB+pntkANhsCpzGI2gsAsixFpjn+llxLKe4xNyGAj1ttvb9KO5xFID8rZTJYwSFvfJ8NKrPxQJUESwZfvAE7XtBBn60qy09lY8MhOUDKbIQZMtIi8RJgiYipHss7BCNje422q9xoLr3WEggg3JUgg6ac9Kzfbxawjbv2rpjbpHsYqQoaXqZBFfQec4qQqAE86ltVEhT0PDczBqYcUCY2puGeTeinDJFVuGMG5qVZGvhtSdKCuIKn7estKmIsU6iabiHBtUExYHhVjNGy0stOpkVKqiOWqzXkGJBonFOQLVnnEJNWFX8Nqm5GtVkejjBMa1AgRREQa1WymLVLAY+lKSNBcIHWq2LhwYqzhYk0+IAR1qS6Wzbm+2uxGx2Vy5C4akogJUZz99mHICNNCdJrz7jlzO5ZxmzXKCQ0/e0AEmdtY8K7v7VcO7wpx/ZYRUk2IkrJbM40GWNRzrz9+zHVA1wslZmNQWBI1Ejcx864+b2vTeGoiQyX1AvMTrzGsfpUuG7QDFlscvdAywYk8zfXy9Ko4nEA915IsYm/ujc9dv2qWBJM4QRCLHZiMwkk/H16V5rOOXX2XcJUAuuXaIuZvM/duBteh42MxEEEkaAAnW+o008opmhmZSTm7syeQ7wUdSSY/rR8dciAKdpMgg33+K1zvaW7W+HwhkADe9JOupyzeNZAte5rJLnDclcrC8AHQzPiSBGvOj8BxBhWMxpEE3ljOUdI289qPi4mcwJhe8T3R7OTew96+o87RSSze0VsMM7AoGsDIOhzaQPOI68qs4HFWbNOaVJU7EyBBv8AhPQU2LiOpuyFAt1BuDzEbSooPaKLqND38xP4rkbRfzk074VLG4jMAN7AZMsgkXm1tifA1TxEADKQQZEFiJJJN1gCBHPS3kPinUEMlhlUE7sIjvQb7iBrQcV1dFBYAwQSQDYXGUWk+HPrNbxxZ2sYXFE90uZY2IuRdc2vnJG48apQ34m9R+9UcPHKtYe7c2rX/glfvkvLd4906m5+/wBa6a0j17h+JE9auK9ZjLytTqG/FXtsc5V7ExBSR5HWqxwyD700XCcDWkhSVCLmn9qKT4gNDdAR151UW8LH2qjxmIFbu+fjUhhvsRUkw2OsVAJOMqyuOOdQ/hQOVMgANNLsRsSmV4vRFjlSADaWohYeKQDSbiDzplQ1L2RPKgdeIJ1imDg8r0cYYiCKb2a8qABeKMjkg7GpFANhT59hQCwwV1HnRAwmq2KHP7VndtdoHh8B8RjECF6ufdA1+hS8Tay/C32p21h8PAcm8mFEm0a3trvXLds/bbFBBwAFTLf2iEyeczAju+prnQzvme5zG7Ne+pub6j5aVPGxspCPDmIMCzEE6jwjXc8q8eflyvXTvMcTdods8Tjqgdw4zZgEWCCBecvUx06UnTExIV+6JBypAv3mJYtJZ+ZE8tNAlFsUCqbzqoZd/lQhxWUznOaQSGGhvAB5R9GsXPK9Exk7O3Y4PeViQZJ7sHTYxzOkClwbezTKGynrlOpUxPLTSd+tXzxRABCgzqU0ggENlEib/pyqpx+EjDP7jSSTN5F7gab3EbVj2t4rVknSlxfErnEEwtifdzjmF2P1ypcK5AJLBZsFvBFzryteYmelSUYbLeAZEyxBKxJbugxe2/maLjcIjRkZVtc5plQRPdJmRNwDtWuOnNY4JM8KYZgAVX7oA2IOpMz+9Y/EOwYoSyzDQToY01ga1e4d8r9yWgEi2YE8wujAx1+VHtiIw65rgD3RM2NwZMXAuOQqS6v6A+Gxyy5S8liqqogSdILc+9Ek1Xx8wUguxFyV1GaLSQJzXHTUTY0TD4YKAXOY75SVIAmyne0k23HllY0hjBOpMnUjW8WrWOOy1WGJchpvOtr8qfBDtmhh3Rmg7iCDlEawelWuG4V2KPI3ymRJKlhGs6htdqFxDGSQJvJa0yRprp4V0/SK4xWU5TNtjsDy8oouZ/xfAVVxC2t40M+tD7/4m/MK1rY9/wANpERU1wj0NByGpq5FelyFfCFJMGaXtRFQLmgcLGo/WouBzqaTUGRulUERORod6dfGlnoHzHnUCxqQaolZoJK53oi4tCVD9GpssaihtPPO9OrkGaFNOGobXfaChO/Khq1LNQWExBEHyPKoxOhqs09KIg61AVjGtUO0uzU4hQr3AOYCJE7Hn8dCatsetMOhppduR7YRMBPYe/MQAMowwbkgkmDYXM7SbVwXE8SFYhWIA33ncV6L9suAxsQK6QyINFGZwSQCQu/ltPn58+GiwQzOwiJj3r6mSDvB5jSvL5J/bl0xvCuzs0FpgixgieoOhGsx8abBzXAM5tfAXtOn8qFjO1wZ0BI01j0F6SPlkwZiBBHyM1z1tWlw5TLLWYEwVJlp8BoLnyHWnfiSoK5wwN+cErFiLixM/wBaq8MjNZFtJ8BaTLHQUTh0ZpypJiM0wBex8ZtrWb3yboGAygyZ6QJvt5eNTR2dchY6yA2mgBM6zHXnV3srD77LiDMACMoAkNOUEwbrp6CoYvAoWKo0NsZMAzBDWsdfDeN25vSSB4HDpHvMTC3JItIlcomw58+dNjcSyNlB7oEaTYGQSNm/eOVLMFlArGIsJBhdSo238ZqpxCZmlFIkiO8Mt51BAj65irFDPFlz3tpuSTE+Og09KrOSSQDOpvpFLEwzqbQb/tHjTO+plY6/V6648M02FiFecTtoJEX+tqlmJY5j5j4T5VLKCNREWAF+kz9XojYdwltJ0gkdflV2sVGYAkLeDEg2YDWROlp/aolPq1GCiT3BmkADb6+tql/Evy+X7U2PdQTUommjw9arL2pg3/tElTBvvXptk7c9LOU1KDU1IOkeR56VjfaXtr+HQKgnEf3ZNgNM3Xw/alykm6SNhaf2tedcJ9psdCxZg5J+9cD3vd5CT8K6H7PfacOCuMACqljiaLCxJb8OvnO1c55cbdGq6QmdRUTh/UUWZAI0N6QFdUDCeFTC2qR8qa9ESdIA38qQxr04Y0jUU2MQdKgovpRTEbedCfiUES6iYiTrOnzFEO+HNDIPL4UfzpA9aorQamo60YLWd2z2unDqJAZ2MBJg7mTYwLUuUk3SRoKo5fCmBHIVxPH9tY2IZRylxlVZEQ33/wAR0O4gxFbXZ32nRsOcVWVlAzNBg2sdBlJM2NutYnkxt01caH9qsN5wyHjCLBTHdKs1gxYXvoIjXqK5P7QYBwsq4RDKss8e+hUAE4gPukSI6QItXV9q8cmNhDGQvlwnDMDADJqGKki2kE3nzrneJwTxDO/timGSxIxGW17AZQGGgmRaQJJrOfPRHN8ZxWNjNL5VgQVUZBAYm6j3jmJuZrPxMOCD93qIkWtFanaHBskQ6FGDNmQkpAMAZyNSSv5taykbMwgX3k2PLlfWvPd75dPhLhswuNdN9GBkHoRI9a6PhO0sJUZMqglQC0QBNmEKIB94za3OufxOLBUDJt6W+dLDccgZ3Gx25TFYuO+1bCcWiIuS7XFh3ZuZJI10HlbUxW4njc+Z1SGze/liRMy14Ukid/KL1sXECiLzsR+Ad2Fnrmm2/nVZ8eBlDGNxJIPltPnT1Ta1wrs2JZ2zNIMGCTcAgkGdZj96FxnES2UG4Iv+OO6AYm/jQ8bKTmCxctzAEyPEeI260BkW5AOtr6fWtakmzZuLxMzTlUWAIHMC09Ym9VHUzBNjf+lFLa3ioYyxHIrP1yMj6mumIHmiw2qWYtYAxF+XjQ8s6fHfpRVUgEGOnl+laQyNcA9DrHr4A1anD3Bn/pH++qju00s/X4VKOyxOMdiSzMSxGbMSCeQMHnequJCSQcupnYab6RGnj5UTIVkbCLd2Im5gmbc+nhUnd1+6CogQIiwsem0f0rz75aXeF7UxMP3HIDHlYd22utgardpYj4r+0Z8zEC2g5CCDYdBafGgYcQGgQ0TBjawNo38rc6I+CpRhmMke7JF7fd2mPjbo9rLra6gHEAjLlBi5sTYnXS0nT+lNhYpANz1i0wR5mRvTYWGQMuZic0QNQLHQn6mnwhLMstmksPuwZNgD5Vu3bLuOzvtMDgoAhd1AUy2UExbvXvEWtVzh/tPglAXDI9wUiSIE9LV5/wANxBDAi51vYzaCJNwb1p9oYKlcwQgggm5uhzDNrcZvh0rU8uWN0euNdxwfb3D4gJDhYEkPYx8jpoDWXifa5RmjDzQxC94iVBPeuNSIt1rjkBKg6qReAZMbAwZOnpRFx2gwVECYHlF4vPPypfPl8Ewxdjxf2nUA5EPu+81oYkWiLwPU9L0bsPtgMjDGcAi4Zu7K2sdpBPxrhk4o3sYOUSTafKY+t6FxGIYBN0JymDF4HIi1jepj5s98mWOOnQ9tdunFZgnuCQCDqLgk9DB1vpasjH4mIE3EamBvp9b1nJxJZghB5hV7s8yZ05+etWvYhgJEiIBkZiLHlB28azlu3dJxOG/2R9oDhCGupJ11zRIIOsfzNXuA7fcYmbEJyMTIy+7yyzfYW6k1xiuixcROWRIvmtbz5+orSQB1KhlBBIlhIJsf3151PyZY654WYyuox/tQjB0ClCQQrDvQYOsEETYW0muSxOJA6uxJlpOtiIJMXnl4UNOHZCwYWt3hJW5F58SPjQOIx0BWZOadI10Mxfl9GtXO5HrMV9sQEXBaYkCL+vIAjzqT46iJQQbGTtzjbx/lVHDc5gADHPWIEzMCqnHEgzmBE6CDfcEA86587apcf2ixJggISMyqcswIuR61DH4vDd85QgGxVTAUCIA/TwrMxnOijeANZ8vKhIHbSdPKOvSu8tYavFcY7oFg+zEZVAUAfhLZQMxtF+tUHYgQJHQTfl50UOQoUXgQPUmRUHbPAFzGk2tt6Vndt5UyPrpa38/U786muGpkGw2O09IqGJhAmACsCD+h11NJkjU6DTf6tUSrOG2ZCki1wWNoNoAi5maBiDukkCBew0PPTnpQyjESoI5x9aUIk7xHIz1vTXKGDSZJgfrypEGd/rcVEiADOlx/LzqJZ2UAAkA2PU635VrQNOUeOxv6+lRaCDczYi8DrIqALDusIkW8PX50Fn/p/KtSBYixuJmPKh5qlirGoNDYRWogis3y/l5U/s/8X16UPCQk6x9fzovtD1oOlLnPBBRjAAiZ1mw25HptReKxyoUtBkkEEaEyFbNBE9RWZi9oEjOD7vdLGxNywEHe2k1f4bjs6yYZgZgjY7ARYC9689lnOmiVyrtCyha58gd+u/W1LERgjgZpKKZgMpGYaNY+R685NPFxO87BgIPumMwAuskSInlE+tP/ABvcUEmJMWAANo2E/e0iL66l68m1guxUTmHd0BlmgmQN5EjTTWp4eIGIObvQwGgkza8WN9p3qHD8QY7xBiTzI0ttp5/CkMoBBXMQeYkgRcCbEaQNq0DLw+UgMwKxqRJFxaSY3671sYXFsVCtAlShBa0zIgbjXTmJ0FYfD44GVVaO9EEi66wZ3uPhrVXtXj3CogIymXkWkaCpq26WXTVc6QQpBOlwRHvDrf59BVfF4sA+6C2zR/im4mevlUGxSuCjupOacuZTlPdJUhhreLTp8M0cWLsoYH/rI/r+lJjtNtTH4p8uYuotGpuSptBgEG4kTFQ4XjCiy6zpE8xNwNxBvVDiOIQw57zEiQV7vW8zNtwddt3Xh8UicjqrXHdaMuogxcX+PWrMZrktabY6ugDhCcpidbwRBjoBbWOtRTEZX93ItzoGBsBrOkiOkjSq/DJAKHBYuInuEEd4wCI55df5VbxO/wC8jiCAy5YMtK5cwEmWAERrYXqcTgNi41gcyhiSSBo0DKZK6kGanwmIWUE3vZth08bdaocY6o0ZNAdQVmGjyt4XFT4R8oGdXC6hpuBe0GxH86mU4WV0XZbuRkvtMkQQRpO/x122ze0MXJlLgiWcqVuAwkEX8COemk1Z7PVlyu4xHW0BUeBlIF40MSZ3jwo/HurqyLw2MFM3RGXvEC5BHMCecCuWEkyu2rluMLhuPiQDI2AnU+N586ni8armXiwImBJY+BgCZoePweJDgcNiBmaVaHOVPw5QIJjfxoB7OxCLYeKDrdD5AHavRrDvbFyqtjq2a4IPURad/T4GnwUtrHy03MWuIq9gpxIUL7PENx9w7SbyJ/aoYwfMQwZVaCVj3QZ96ALW+JpuIqthxM2taxIYgbRYeHy0oTEAAAd64PImTfoY5VdOMREKSsmCVgGddtIHjaqmPjAkGJb4AbCN/WptpLBxQgusvMifDSNN96GcTw8tBQAxmee9SdLx/SefgL1dIIrW1N99pqCEEECJvc29OpqLsdItF/HnUBNWINwODmddxmEqrBWIm+Wd+u16s8VjKhdAtsxjMJYXOs2J+dZr+Ip3edKtmzZzfSJ3tp4fyoJAmPOpunPnt9ePpQQRM7ada1A59TTexMTa+2p9BTq0HnNjRHttV2ABcp5+VNn6URzqNOn1eo+0H4fiao7fhmw1DL/Z5Gz94jMO8xYT3tY2nbrUOAxMFHgZCoRATmN2BctPe72o38uXWBx9CpDF6fKvmfn747bc7xnafDuGDYZJP3kyrJiLnPJt8qzcNeFCgNhYhMAG6a2kqZkXB9a7X2vQfXlS9p4egqTzamp/qacTj42G+MrLhOECqCJQEkM7MbtlJMradjyFF4BFCLnXEzQQ2V0iZPektexGo1Hr2OepZ6t/kca0mnM4HY+G4MhzMWJW0a+7cyLXNXsDstUbMnDoe83vGSFKiAubTvD41sB/GnzD6/rXO+fK9rpi8f2f7W78NJAyiMXL3Zt7p8PQVjN9mHz5hhDJA7ntROomWJnSR512eapA9DVx/kZY9JpzOF2eyshw+Cgo3e74JMKwC5mN/eUz0itJeN4kAAcIQB/jQAeFaoPSpA9aZeWZdz/ppz74mOXZxwsZlUe+kkq5aZ6z8KEcHiGZmPDCS6sDnSQUxC89SQQs9K6gOeZPnTF/qBU/LJ8GnP4+BiszEcMVDYbp76G7lb3bQZdK03wFdQrYUKCDBCmOoCtANzV362p6l8l4UME/QpQ3Si5vr6NOCpsQY3g3joD+9Zk38wURnYBkxEg6HITPnnqHs8f+9T/tn/fVrguETCw0RWgKIhhvcmCJ3Jo2X/Ep+Hzrd3LdaqaZ6cNjif7RL39x/wDyWqhxvY7OHPtO8yhSQHByiTCkubkne0Vv5T08iD8jWfxXFZPebFH+VP1FJc98f4rn8LsEuhLuyoqyAJckwc4gkgQwiIqj2n2QncTDRg5uwduZgE7Adf8AFXRt20n97iDxRD+lU8XjsJjmzS3M4SSbRcg3866455y8puOKxsBkOV1KkT6if1FBRiNiRv66W+ta67jXw8TD9mzsVkN7oDEjcsQT/Ss3B4Dh1OrtrclT/wDn6mvRj5ZrlNqR7Nx2UsuG2VYm0czvfQHQc6rcX2bioyrALFSxVTJHeykHrNq6tO1FVMkFk/C+R9I5i2grN4vtlvboy5QQjILKdZIkREWphnbejhz44NyWXL3lEkSCYmPhN+VH4Ig/2ZMHvQ02naSLWhuevoTF4tlYhSQLk91YJJm8CGFxbS1C7GxE9sPaE5O9mgZiTB2J1Jt512m7NrO0+0uzmw2MmUnuuPddQ2Uxaxs3hHWqnGIBkZSCCp8jqRpP3hrV7juKfIMMlhlzAqVAIlixGax1/reqODwmZQ2ZQSTIOoESG6gwfC3OrLNcp88AcDh53VRFyACTAF9SZAA8aYP9cqbhRDqZFmm4kWM3G88qWJid4tA1J5DWbAVugj4hgC/MedifG3wp4P4h8P2p0wsyqzMoWQpAPeO5sJ56mK0/4XC/vE/M/wD46xbIjvw1PmHOq7OZmTPSBTjFP4m9a+TrF14WAw5jzqSuOYqt7Zvxv6ml7Z/xv6ms/wBUWg45inDjmPWqxxm/G/qaQdj95/zGn9RaDjnUg3Wqfe/E35j+9K/42/ManAuB6cP1qn3vxN6mnIf8Tep/em4i7npzigC5j4Vg8R2Y7GfaNPn+9Uj2HiE3IPUsf2rcxx+023+J7TRfvD0n5NWc/bz7FPyv+9Zz9hvtHkf3oeJ2XiDRX9Qfka3jPH9m14/aDF/w/lP71Bu3sbn/AKKo/wABiH/lv5z+1BbhnB9xx/lY1v1w+E20m7Y4j8RH+QfqKG/anEDVn9AP0qseHxWHuHzT+VDxOz8X+7I8APoUkx/QM3amN+LE9SKieNx9zi+bNT4XC8QPdRwNwA0H4UsTs/FJ/wDiPgEY/pWv6/oBPaL/AIsT8xNOnazj/mYv5j+96R7PxNBgv+Rv3ph2Ti/3b/kNXeCJDtfE1z4n5r/Gg4najnUk/wDUFb5irmD2W+nsHPUgr+lExOxHItglepYn4EU98YMhu0W5L/20/wBtAxOPJ2/0gfKtH/g77wPr4VF+zY3nwX/2rczxGUeMP1NCfHkg7jT5VebBUahvS1RdU2Deg/etzKfQoPjzY/Kal2WMuKjciDuPryo5I2/SoMGt3hy2tXTHKRZWx9tOFVXw3w1yh1J6WygADQbnz1rmhMGeVag7RxrBiHUW7wB7tgVB5EKPSgdpthkKcNGSxzBjIm0ZY89asvUW2W7jLiKe0da2x2YhAK46aCzAqZjTlQX7NI0fCPg6j5mrPJGWQxp87c6vtwLf4PzKfS9/KhfwbdPzCte+KvR0YURX+vo0EsdqcA8718Vsct9RNIYlAXNGo+jSzHnU2DDEpF6FnNOrTvU2CAzpNOGbrQ81PnNTaCSacmhK/OfOpB55+tNia+B+VPHT1qIqU70Eg9M7NHdInrJHoDTr4ipjxFNjL4hOK+6yf5f/AGoDDjRvPhkrag86llPOtTyfqJpzrYvGblx4KD/9RQ/bcXzxPy/yrpSTFPetTy/qGnMnieKA1xPHL/Kqx7Uxx99x53rqMbgke7KCepP70B+ycI/c/wBTfvWsfLj8w1XNv2pjHXEf8xqDcfin/mP+c/vW3ifZ9To8crT8zQD9nG/EtdJ5ME1WQeNxNC7n/MaF/ENEZj6mthvs6/4k+P7UJ/s/ij8B/wA0fMVuZ4faarIbEJ3qJY1qHsHF/Cv5l/enPYGLyX8wq++H2aY5PjUZrWbsTF/DPgR+9BbsfF/A3wNameP2aZ5FQNXH7PcaofSgPw5GoIrcygrk9arY7zarpwqicL6iumOUgrI4gX2p81GOCTsfSoNhdKu4BNUfZ9aOuGOUfXKiewX6j/dV3Fd4ug8KdN/rlSpV8i9ulM7m19/2qS86VKpUO1gPL51GKVKlAs5nWrG9KlUQ50qKb+VPSrIghsKefkaalVBA16i318KVKqJpvTBze/P50qVZgTuc2tOF/X5UqVaDrr61NdaVKsBLr60jSpVYEbz5Uw1pUqgdlqIGtKlWghQw550qVUFRtadtqalUqRI4Y5fU0AAHUA+IFPSqxpXdBA7q/lH7UjgLfur6ClSq7RDF4VPwL6UP+Cw/wL6ClSrctH//2Q=="
            }
          ></img>
          <div>
            <div>TEST: Fort York Films</div>
            <div>1053 Dundas St. W.</div>
            <div>Sat, Sep 3 at 11:00am</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "25px",
              borderRadius: "10px",
              backgroundColor: "#6DDCED",
              display: "flex",
              boxSizing: "border-box",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>LIVE</div>
          </div>
          <div>8 Registered/Attending</div>
        </div>

        <div>dropdown menu</div>
      </div>
    </div>
  );
}
