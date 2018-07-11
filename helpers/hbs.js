module.exports = (hbs) => {
    hbs.registerHelper('is_active', (index, number) => {
        return (index + 1) == number ? 'active' : '';
    });

    hbs.registerHelper('prev_link', (admin) => {
        return admin.href(true);
    });

    hbs.registerHelper('next_link', (admin) => {
        return admin.href();
    });

    hbs.registerHelper('has_next_links', (pageCount, admin, options) => {
        if (admin.hasNextPages(pageCount)) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
}
