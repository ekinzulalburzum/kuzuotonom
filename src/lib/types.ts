export type Breed = 'Merino' | 'Suffolk' | 'Dorset' | 'Hampshire' | 'Diğer';

export interface Vaccination {
  id: string;
    name: string;
      scheduledDate: Date;
        completedDate?: Date;
          status: 'bekliyor' | 'tamamlandı' | 'gecikmiş';
            imageProof?: string;
            }

            export interface GrowthRecord {
              date: Date;
                weight: number;
                }

                export interface Lamb {
                  id: string;
                    birthDate: Date;
                      breed: Breed;
                        tagId: string;
                          vaccinations: Vaccination[];
                            growthRecords: GrowthRecord[];
                              image?: string;
                              }

                              export const VACCINE_SCHEDULE = [
                                { name: 'Koyun Ektiması (Orf)', daysAfterBirth: 7 },
                                  { name: 'Enterotoksemi (Çelerme) & Tetanoz', daysAfterBirth: 28 },
                                    { name: 'Pastörella Aşısı', daysAfterBirth: 56 },
                                      { name: 'Progresif Pnömoni (OPP)', daysAfterBirth: 84 },
                                      ];