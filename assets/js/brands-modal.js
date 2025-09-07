document.querySelectorAll('.brandsDiv').forEach(brandDiv => {
    brandDiv.addEventListener('click', function() {
        const brandName = this.getAttribute('data-brand-name');
        const brandExcerpt = this.getAttribute('data-brand-excerpt');
        const brandImageSrc = this.querySelector('img').src;
        const brandLink = this.getAttribute('data-brand-link'); // This should be added if you want to store the link as well.

        // Set the modal content
        document.getElementById('brandModalLabel').innerText = brandName;
        document.getElementById('brandModalExcerpt').innerText = brandExcerpt;
        document.getElementById('brandModalImage').src = brandImageSrc;

        // Set the link for the modal button
        document.getElementById('brandModalLink').href = brandLink;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('brandModal'));
        modal.show();
    });
});
