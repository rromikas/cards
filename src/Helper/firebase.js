import firebase from "FirebaseApp";
import { v4 as uuidv4 } from "uuid";

const db = firebase.database();

export const updateDB = (updates) => {
  return new Promise((resolve, reject) => {
    db.ref()
      .update(updates)
      .then(() => {
        resolve(true);
      });
  });
};

export const getDbRef = (path) => {
  return db.ref(path);
};

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const storage = firebase.storage();

    const metadata = {
      contentType: "image/jpeg",
    };

    const fileName = uuidv4() + ".jpg";
    let ref = storage.ref(fileName);
    const uploadTask = ref.put(file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        resolve({ error });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};
