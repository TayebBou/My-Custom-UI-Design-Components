export interface IPhoto {
  id: string
  label: string
  photos: [
    {
      url_full: string
      url_vignette: string
    },
  ]
}
