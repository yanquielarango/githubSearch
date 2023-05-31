export function valideURL(url: string) {
    // Verificar si la URL comienza con "http://" o "https://"
    if (!/^https?:\/\//i.test(url)) {
      // Agregar "https://" al principio de la URL
        url = "https://" + url;
    }
    return url;
}