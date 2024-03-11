lightbox.option({
    'resizeDuration': 0
});

window.onload = function() {
    $(".gallery").justifiedGallery({
        rowHeight : 300,
        lastRow : 'nojustify',
        margins : 20
    });
};