import Image from "next/image";
import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container_list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <img src={equipo.img} className={styles.imgclub} />
          <ul>
            {equipo.plantilla.map((jugador) => (
              <>
                <img src={jugador.img} className={styles.imgjug} />
                <li className={styles.container_list}>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m <br></br>
                    Peso: {jugador.Peso}kg</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function Home() {

  const equiposData = [
    {
      "id": 1, "nombre": "Real Madrid", "img": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png", "plantilla": [
        {
          "id": 1, "img": "https://img.a.transfermarkt.technology/portrait/big/50202-1665067742.jpg?lm=1", "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74"
        },
        {
          "id": 2, "img": "https://cdn.vox-cdn.com/thumbor/K-QGL6KezUdCewZO_9IQ246S3oc=/0x0:5048x3365/1200x800/filters:focal(2085x161:2891x967)/cdn.vox-cdn.com/uploads/chorus_image/image/72589035/1644088904.0.jpg", "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74"
        },
        {
          "id": 3, "img": "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4MzQ1NDY1NjY4ODM4OTU4/karim-benzema-real-madrid.jpg", "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81"
        }
      ]
    },
    {
      "id": 2, "nombre": "Barcelona", "img": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png", "plantilla": [
        {
          "id": 1, "img": "https://www.directvsports.com/__export/1702038985462/sites/dsports/img/2023/12/08/20231208_093624013_38kv3puida1r1e2abncyc8duh.jpg_1301049368.jpg", "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74"
        },
        {
          "id": 2, "img": "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/I%C3%91IGO%20MART%C3%8DNEZ.jpg", "nombre": "Iñigo Martínez", "Altura": "1.82", "Peso": "74"
        },
        {
          "id": 3, "img": "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/GAVI-min.jpg", "nombre": "Gavi", "Altura": "1.85", "Peso": "81"
        }
      ]
    },
    {
      "id": 3, "nombre": "Liverpool", "img": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/65.png", "plantilla": [
        {
          "id": 1, "img": "https://img.a.transfermarkt.technology/portrait/big/314353-1701680958.jpg?lm=1", "nombre": "Trent Alexander-Arnol", "Altura": "1.75", "Peso": "74"
        },
        {
          "id": 2, "img": "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-mac-allister.webp?itok=ij-fN5n6", "nombre": "Alexis Mac-Allister", "Altura": "1.82", "Peso": "74"
        },
        {
          "id": 3, "img": "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2023-07/pp-23-24-mens-home-body-diaz.png?itok=tK0JcBKW", "nombre": "Luiz Díaz", "Altura": "1.85", "Peso": "81"
        }
      ]
    },
    {
      "id": 4, "nombre": "Manchester City", "img": "https://cdnb.20m.es/sites/30/2022/03/city.jpg", "plantilla": [
        {
          "id": 1, "img": "https://www.mancity.com/meta/media/4vwjsfxg/julian-alvarez.png", "nombre": "Julian Alvarez", "Altura": "1.75", "Peso": "74"
        },
        {
          "id": 2, "img": "https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png", "nombre": "Kevin De Bruyne", "Altura": "1.82", "Peso": "74"
        },
        {
          "id": 3, "img": "https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png", "nombre": "Erling Haaland", "Altura": "1.85", "Peso": "81"
        }
      ]
    },
    {
      "id": 5, "nombre": "Arsenal", "img": "https://cdnb.20m.es/sites/30/2017/07/dddArsenal_FC.jpg", "plantilla": [
        {
          "id": 1, "img": "https://i.guim.co.uk/img/media/e950319ec272621117c0787c585938a51ae5c8e1/0_87_2942_1766/master/2942.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=50625435f65333117ab22d17e05da886", "nombre": "Martin Odegaard", "Altura": "1.75", "Peso": "74"
        },
        {
          "id": 2, "img": "https://i.guim.co.uk/img/media/663f9ddb113454b2d6c7c1aa5f44ef10a68a553a/56_0_3606_2162/master/3606.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f042fdb45b1ac3333e06e15f810340c0", "nombre": "Ben White", "Altura": "1.82", "Peso": "74"
        },
        {
          "id": 3, "img": "https://i2-prod.walesonline.co.uk/incoming/article27467402.ece/ALTERNATES/s1200c/0_Declan-Rice.jpg", "nombre": "Declan Rice", "Altura": "1.85", "Peso": "81"
        }
      ]
    }
  ]

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
