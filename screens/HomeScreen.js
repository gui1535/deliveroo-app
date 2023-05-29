import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
    // } from 'react-native-heroicons/outline';
} from 'react-native-heroicons/outline';


import Categories from '../components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-3">
            {/* Header */}
            <View className="flex-row flex pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: 'https://links.papareact.com/wru',
                }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl flex items-center">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row flex pb-3 items-center mx-4 space-x-2">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurantes e cozinhas"
                        keyboardType="default" />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>


            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categorias */}
                <Categories />

                {/* Novas ofertas */}
                <FeaturedRow
                    id="12345"
                    title="Ofertas"
                    description="Canais pagos de nossos parceiros"
                />

                {/* Descontos */}
                <FeaturedRow
                    id="12345"
                    title="Descontos Saborosos"
                    description="Todo mundo está aproveitando esses descontos suculentos"
                />

                {/* Ofertas perto de mim */}
                <FeaturedRow
                    id="12345"
                    title="Ofertas Perto de Você"
                    description="Por que não apoiar seu restaurante local hoje à noite?"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen