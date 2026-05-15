import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
      name: 'KuzuTakip - Yerel Kayıt Sistemi',
          short_name: 'KuzuTakip',
              description: 'Akıllı kuzu sağlığı ve aşılama takibi',
                  start_url: '/',
                      display: 'standalone',
                          background_color: '#000000',
                              theme_color: '#15803d',
                                  icons: [
                                        {
                                                src: 'https://picsum.photos/seed/lamb-icon/192/192',
                                                        sizes: '192x192',
                                                                type: 'image/png',
                                                                        purpose: 'maskable',
                                                                              },
                                                                                    {
                                                                                            src: 'https://picsum.photos/seed/lamb-icon/512/512',
                                                                                                    sizes: '512x512',
                                                                                                            type: 'image/png',
                                                                                                                  },
                                                                                                                      ],
                                                                                                                        }
                                                                                                                        }