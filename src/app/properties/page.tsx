import PropertyCard from '@/components/property-card';
import properties from '@/properties.json';

const PropertiesPage = async () => {
    await new Promise(r => setTimeout(r, 2000))

    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {properties.length === 0 ? (
                    <p>No properties found.</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map(prop => (
                            <PropertyCard key={prop._id} property={prop} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PropertiesPage;
