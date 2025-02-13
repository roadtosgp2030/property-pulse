import { fetchProperties } from '@/utils/requests';
import FeaturedProperty from './featured-property';

const FeaturedProperties = async () => {
    const properties = await fetchProperties({ showFeatured: true });

    return (
        <section className='bg-blue-50 px-4 pt-6 pb-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
                    Featured Properties
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4'>
                    {properties.map((property: any) => (
                        <FeaturedProperty property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
