
const formToggle = () => {

  const postSections = document.querySelectorAll('.post-partie')

  postSections.forEach((postSection) => {
      const btn = postSection.querySelector('.comment-toggle')

    btn.addEventListener('click', () => {
      const comment = postSection.querySelector('.comment-part');
      comment.classList.toggle('d-none');
    });
  });
};

export { formToggle };
