const postFormToggle = () => {

  const newPost = document.getElementById('add-a-post')

  newPost.addEventListener('click', (event) => {
    event.currentTarget.classList.add('d-none')
    const postForm = document.querySelector('.form-part');
    postForm.classList.remove('d-none');
  });

  const cross = document.getElementById('close')

  cross.addEventListener('click', () => {
    newPost.classList.remove('d-none')
    const postForm = document.querySelector('.form-part');
    postForm.classList.add('d-none');
  });
}

export { postFormToggle };
