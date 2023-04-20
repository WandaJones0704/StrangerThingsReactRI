const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function getAllPosts(token) {
  try {
    let response = null;
    if (!token) {
      response = await fetch(`${BASE_URL}/posts`);
    } else {
      response = await fetch(`${BASE_URL}/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function addPost(token, title, description, price, willDeliver) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(token, postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}
