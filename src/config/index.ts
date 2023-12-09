const config = await import(`./conf${import.meta.env.VITE_CODE}.js`);

export default config.default;
