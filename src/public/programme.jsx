import "./cssPublic/programme.css";
import Programmer from "../component/programme/programme";
import { useState } from "react";
import Jour from "../component/jour/jour";

const Programme = () => {
  const [pro, setPro] = useState([
    {
      titre: "NCI NEWS",
      image:
        "https://www.positive.news/wp-content/uploads/2019/03/Bluebells-1500x0-c-default.jpg",
    },
    {
      titre: "Chante Ton Kiff",
      image:
        "https://www.positive.news/wp-content/uploads/2019/03/Bluebells-1500x0-c-default.jpg",
    },
    {
      titre: "Le Coffre Magic",
      image:
        "https://storage.nci.ci/tv-shows/c55fff8e-fc1e-11ee-962d-02420a000e85/9a0b7bf4-b42e-43c6-beea-ca10dc6b24a4.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T222745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=100919d278c46f4512d3d66ca94c8474554154845560e24397a849371a214f85",
    },
    {
      titre: "Nostalgie Fun Outdoor",
      image:
        "https://storage.nci.ci/tv-shows/5cdfc6e2-4291-11ef-a766-02420a000439/f01d0642-fe41-44e3-94fa-ac73e0ab839b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T222745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=ba2d45c0cb1088363b5a576d5533f8e70c090d60066b55b4beed2bfc55553943",
    },
    {
      titre: "Amitié 2.0",
      image:
        "https://storage.nci.ci/tv-shows/82eb7a72-1df0-11ef-9242-0242ac12000a/d29bdf4e-b63e-48a3-9292-0388a0bb6cfb.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=63d1c3aa950ac69cf9906dfbdbbbdcd65cddba6c8f460ab575ad870c3d6e9410",
    },
    {
      titre: "Les Hommes d'Ici saison 3",
      image:
        "https://storage.nci.ci/tv-shows/d3e3127e-3e0b-11ef-bfce-02420a000432/65c2a843-f3b2-4640-a71f-5bb94c9128a7.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=a00280024ece3f1c2f549ad62ac53bea4e65569a32dafa986436e8d5b407a75f",
    },
    {
      titre: "La Télé d'Ici Vacances saison 4",
      image:
        "https://storage.nci.ci/tv-shows/f0b5eb9c-3ded-11ef-abc4-0242ac120011/3b8daaa0-f310-43d3-916d-ee1ea25347da.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=174cb8112ee8318261a239b78e273dd0a01f41a1a5ba65ad67df09411a3e84d2",
    },
    {
      titre: "Yvidero Show",
      image:
        "https://storage.nci.ci/tv-shows/3e98f556-853f-11ee-aaa1-0242ac150006/cd5910c9-88c6-4e56-bad7-30ff62018a7e.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=266f32670df3e61a491ea40381ad6915d1b8de465f90325fed1aa5c861b5b0c3",
    },
    {
      titre: "Mood'e By EK",
      image:
        "https://storage.nci.ci/tv-shows/28263c54-879a-11ee-a49b-0242ac160006/f93b9d86-5a04-4c2a-94ec-539d68f874e0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=4f31af814b5d07ae4ad3763e9d967f94f3937d63de8028e3880b61d3da313e7b",
    },
    {
      titre: "Altiné - Mon Unique Péché",
      image:
        "https://storage.nci.ci/tv-shows/7ed8e278-187b-11ef-8e91-0242ac120011/57146570-04b0-4d19-b5ef-843b12ee4a68.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=3a0dd23e53de21e627db19b5d5ef80f58afa2a358a92b5d3e6d15323f034fca0",
    },
    {
      titre: "Focus Faits Divers",
      image:
        "https://storage.nci.ci/tv-shows/76c007ce-853c-11ee-951a-0242ac150006/5c2be21c-95f6-41b6-8e01-21c3fa7a415b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223030Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=9416d9dc02172ecc9017af2de1cd5c4074e4fb60a0741f6af2f4f5f51b59f6a2",
    },
    {
      titre: "La Télé d'Ici",
      image:
        "https://storage.nci.ci/tv-shows/ccde7a64-853c-11ee-b276-0242ac150006/52f01dac-ca76-4d6f-b0a6-b8734b56a359.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=4f1a09caa957d3535ff15c1e978e775590411cc53a4c7edecb723132ab5120dd",
    },
    {
      titre: "NCI Reportages",
      image:
        "https://storage.nci.ci/tv-shows/35578e6a-853c-11ee-ae57-0242ac150006/b33a4019-439f-4240-9501-797c0f5cc997.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223629Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=9a6c57a002d78e15c31eba571d0b6b8451846c8f30d558d19b1fb124c811876e",
    },
    {
      titre: "Ici on s'enjaille",
      image:
        "https://storage.nci.ci/tv-shows/4a48549a-8545-11ee-bea0-0242ac150006/b17aeab5-9ec4-4194-aacc-ab97dfb8c9e4.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=62f345bc4a2f7c4fc9b3e19f3217b6dd695b8cc56a351056fc222f1ba4ae1aa4",
    },
    {
      titre: "Nostalgie HITS",
      image:
        "https://storage.nci.ci/tv-shows/855fad40-853f-11ee-9866-0242ac150006/92904f1d-5a66-451e-b190-e4c88e276f54.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=fb268d28a8ef06f9bc3b7b50b613c930f4dd794d68ab3860cf425c067baeea09",
    },
    {
      titre: "NCI Sport",
      image:
        "https://storage.nci.ci/tv-shows/f8d32164-8542-11ee-b3d2-0242ac150006/8450114c-83d6-4b24-adf5-6dee400d5fa3.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=3b2029e34dca3d2c3fdaecaff5ce0ce8f73a6ec4d61b2b20bffa8ee044a09fff",
    },
    {
      titre: "Les Femmes d'Ici",
      image:
        "https://storage.nci.ci/tv-shows/f9ce380c-853c-11ee-9a41-0242ac150006/53c0efb3-e08b-4f86-81ee-107641a3a2fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=f1d2fd448ac20d13b74806898c59eddf90e50b3befc9af9ae1bfc7ea297bf930",
    },
    {
      titre: "Félicia - Mon Unique Péché",
      image:
        "https://storage.nci.ci/tv-shows/b0781bfe-02f6-11ef-aaaa-0242ac120012/1ebea5ce-6675-43b1-bb38-721d050b1d61.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=a8078231a5822563163de1ec641c70c6eaf9dea92f898973699bc8a8379881e1",
    },
    {
      titre: "Show Buzz",
      image:
        "https://storage.nci.ci/tv-shows/59eb6092-853e-11ee-8392-0242ac150006/5cf36c0b-9774-4b49-a2f5-6f6a9a8c4942.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223629Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=c4fff74f19a50492a32a1788402d279855816cffa4a479e22baf29aefde2e744",
    },
    {
      titre: "NCI Sport live",
      image:
        "https://storage.nci.ci/tv-shows/a336152e-b169-11ee-b336-0242ac150006/5137d380-7e9e-44f7-8395-4efbcbb2e824.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223629Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=3e566bea523e87744f971e8cac68c2055934d4c175a5727de07116a2f597671f",
    },
    {
      titre: "NCI 360",
      image:
        "https://storage.nci.ci/tv-shows/57a12e1a-853a-11ee-96a2-0242ac150006/3697b223-2ac8-460a-b9f4-ed029098c2d7.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223628Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=3b5b77f1d90db1cd5a1b63601761d65e3958a622f11914d4949135012742d1bf",
    },
    {
      titre: "Le journal de la CAN",
      image:
        "https://storage.nci.ci/tv-shows/dce239c4-b169-11ee-af5c-0242ac150006/5373fc11-2be2-482e-9728-ae1c9fea7651.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223628Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=d889790c1228614babb7d025c52c086970f97db61d912420557fcba516a035d1",
    },
    {
      titre: "SANS RESERVE",
      image:
        "https://storage.nci.ci/tv-shows/f40602e4-853a-11ee-bd9e-0242ac150006/d7a10ff6-afa7-47dd-86c3-00301b20491c.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=b22a802771083f35d7430ce1d48cc585968f2a76f68e6621305bd1358a29fb92",
    },
    {
      titre: "Derrière l'eau",
      image:
        "https://storage.nci.ci/tv-shows/75d74d1a-982c-11ee-bc04-0242c0a8000a/b2598555-fc50-4294-b4e9-9710967eddb6.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=a0a10ae7b80ed074030756b2e8d78d6d16f582b54e380d0cd9899dda325cd1fb",
    },
    {
      titre: "Mea Culpa",
      image:
        "https://storage.nci.ci/tv-shows/ae7a6e1a-8542-11ee-bacc-0242ac150006/5c37b0fe-a67c-4f7f-b6bb-b10d05aa3acb.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=95ed0b232442628b6b4b44b1f6afc4feaeb17addb231322bea1b98f35a5740ed",
    },
    {
      titre: "M. & Mme Tonki",
      image:
        "https://storage.nci.ci/tv-shows/c86f643a-8df6-11ee-bb63-0242ac1f000a/eee7de5a-ae30-4ec7-ba12-7c2c4ee1da40.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240812%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240812T223631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=296ec532f9ac6347b69363ea0e8d2eaf8af33cd7021960998469a821470a5f4b",
    },
  ]);

  return (
    <>
      <div className="containerD">
        <div className="setion_programme">
          <div className="setion_Petitprogramme"></div>
          <button className="Btn_telecharge">Telecharger le programme</button>
          <div className="CategorieGrand">
            <Jour />
          </div>
          <p className="programme">programme du mardi</p>
          <div className="elastique">
            <div className="programme_flex">
              {pro.map((p, id) => {
                return <div key={id}>
                  <Programmer titreP={p.titre} imageP={p.image} />;
                  </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Programme;
